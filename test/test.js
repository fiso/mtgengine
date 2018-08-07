/* global describe, it */
'use strict';
const assert = require('assert');
const Constants = require('../src/engine/Constants');
const Permanent = require('../src/engine/objects/Permanent');
const BasicMountain = require('../src/engine/cards/sets/setATH/Mountain');
const NessianCourser = require(
  '../src/engine/cards/sets/setTHS/NessianCourser');
const Tarmogoyf = require('../src/engine/cards/sets/setMM3/Tarmogoyf');
const UnimplementedCard = require('../src/engine/cards/UnimplementedCard');
const Game = require('../src/engine/Game');
const Cost = require('../src/engine/Cost');
const Deck = require('../src/engine/Deck');
const Scryfall = require('../src/engine/apis/Scryfall');

const cardApi = new Scryfall();

describe('Card', function () {
  const game = new Game.Game(2, 0, true,
    [new Deck.Deck(new Deck.FSLoader(
      __dirname + '/../decklists/kikichord.txt')),
     new Deck.Deck(new Deck.FSLoader(
       __dirname + '/../decklists/monored.txt'))], cardApi);

  describe('# isBasicLand()', function () {
    it('Should identify basic land cards', function (done) {
      const card1 = new BasicMountain(game);
      const card2 = new UnimplementedCard(game, 'Force of Will');
      Promise.all([card1.ready(), card2.ready()]).then(() => {
        assert(card1.isBasicLand());
        assert(!card2.isBasicLand());
        done();
      });
    });
  });

  describe('# sharesAnyTypesWith()', function () {
    it('Should recognize cards that share types (or not)', function (done) {
      const card1 = new BasicMountain(game);
      const card2 = new UnimplementedCard(game, 'Plains');
      const card3 = new UnimplementedCard(game, 'Tarmogoyf');
      const card4 = new UnimplementedCard(game, 'Psychatog');
      Promise.all([card1.ready(), card2.ready(),
      card3.ready(), card4.ready()]).then(() => {
        assert(card1.sharesAnyTypesWith(card2));
        assert(!card1.sharesAnyTypesWith(card3));
        assert(card3.sharesAnyTypesWith(card4));
        assert(!card4.sharesAnyTypesWith(card1));
        done();
      });
    });
  });

  describe('# Types', function () {
    it('Should get card types from the API', function (done) {
      const card = new NessianCourser(game);
      card.ready().then(() => {
        assert(card.hasType(Constants.cardTypes.CREATURE));
        assert(card.hasType('CENTAUR'));
        assert(card.hasType('WARRIOR'));
        done();
      });
    });
  });

  describe('# Tarmogoyf', function () {
    it('Should be just a dude', function (done) {
      const card = new Tarmogoyf(game);
      Promise.all([card.ready(), game.ready()]).then(() => {
        assert(card.hasType(Constants.cardTypes.CREATURE));
        assert(card.hasType('LHURGOYF'));
        const p0 = game._players[0];
        const creature = card.resolve(p0);

        const cards = [
          new BasicMountain(game),
          new NessianCourser(game),
          new Tarmogoyf(game),
        ];

        Promise.all(cards.map((c) => c.ready())).then(() => {
          for (const c of cards) {
            p0._graveyard.addObject(c);
          }
          assert(creature.power === 2);
          assert(creature.toughness === 3);
          done();
        });
      });
    });
  });
});

describe('Permanent', function () {
  const game = new Game.Game(2, 0, true,
    [new Deck.Deck(new Deck.FSLoader('decklists/kikichord.txt')),
     new Deck.Deck(new Deck.FSLoader('decklists/monored.txt'))], cardApi);
  const card = new BasicMountain(game);
  const permanent = new Permanent(game, game._players[0], game._players[0],
    card);

  describe('# tap()', function () {
    it('Should make the permanent tapped', function () {
      permanent.tap();
      assert(permanent._tapState === Constants.tapStates.TAPPED);
    });
  });

  describe('# untap()', function () {
    it('Should make the permanent untapped', function () {
      permanent.untap();
      assert(permanent._tapState === Constants.tapStates.UNTAPPED);
    });
  });

  describe('# tapOrUntap()', function () {
    it('Should toggle the tap state of the permanent', function () {
      permanent.tapOrUntap();
      assert(permanent._tapState === Constants.tapStates.TAPPED);
      permanent.tapOrUntap();
      assert(permanent._tapState === Constants.tapStates.UNTAPPED);
    });
  });
});

describe('Cost', function () {
  describe('# cmc()', function () {
    it('Should understand cmc of costs', function () {
      assert(new Cost('{2}{B}{B}').cmc === 4);
      assert(new Cost('{4}').cmc === 4);
      assert(new Cost('{X}').cmc === 0);
      assert(new Cost('{X}{X}').cmc === 0);
      assert(new Cost('{UB}{UB}').cmc === 2);
      assert(new Cost('{W2}{W2}{W2}').cmc === 6);
      assert(new Cost('{2}{C}').cmc === 3);
      assert(new Cost('{C}{C}').cmc === 2);
      assert(new Cost('{C}{C}').cmc === new Cost('{C}{C}{T}{Q}').cmc);
      // eslint-disable-next-line max-len
      const allSymbols = '{C}{W}{U}{B}{R}{G}{W2}{U2}{B2}{R2}{G2}{P}{WP}{UP}{BP}{RP}{GP}{X}{Y}{Z}{S}{BG}{BR}{GU}{GW}{RG}{RW}{UB}{UR}{WB}{WU}';
      assert(new Cost(allSymbols).cmc === 33);
      assert(new Cost(allSymbols + '{15}').cmc === 48);
      assert(new Cost('{1500}').cmc === 1500);
    });
  });

  describe('# getCmcOnStack()', function () {
    it('Should understand cmc of costs', function () {
      assert(new Cost('{2}{B}{B}').getCmcOnStack(1, 2, 3) === 4);
      assert(new Cost('{X}').getCmcOnStack(1, 2, 3) === 1);
      assert(new Cost('{X}{X}').getCmcOnStack(3, 2, 1) === 6);
      assert(new Cost('{X}{Y}{Z}').getCmcOnStack(1, 2, 3) === 6);
      assert(new Cost('{2}{W}{X}{X}').getCmcOnStack(2) === 7);
    });
  });
});

describe('Deck', function () {
  describe('# Deck.DeckLoader', function () {
    it('Should not be able to instantiate base class', function () {
      let loader = undefined;
      try {
        loader = new Deck.DeckLoader();
      } catch (TypeError) {
        // This is the expected outcome
      }
      assert(!loader);
    });
  });

  describe('# Deck.FSLoader', function () {
    it('Should be able to instantiate with valid file', function () {
      const loader = new Deck.FSLoader('decklists/monored.txt');
      assert(loader);
    });

    it('Should not be able to instantiate with invalid file', function () {
      let loader = null;
      try {
        loader = new Deck.FSLoader('nonexistant.file');
      } catch (e) {
        // This is the expected outcome
      }
      assert(!loader);
    });

    it('Should get 60 + 15 cards in provided test deck', function () {
      const loader = new Deck.FSLoader('decklists/kikichord.txt');
      assert(loader.mainDeck.length === 60);
      assert(loader.sideboard.length === 15);
    });
  });

  describe('# Deck.constructor()', function () {
    it('Should not be able to instantiate without providing a loader', () => {
      let deck = null;
      try {
        deck = new Deck.Deck();
      } catch (e) {
        // This is the expected outcome
      }
      assert(!deck);
    });
  });

  describe('# Deck.HTTPLoader', function () {
    it('Should be able to instantiate when provided with a loader', (done) => {
      const deck = new Deck.Deck(new Deck.FSLoader('decklists/monored.txt'));
      assert(deck);
      deck.ready().then(() => {
        assert(deck._mainDeck.length === 60);
        assert(deck._sideboard.length === 15);
        done();
      });
    });
  });

  describe('# Deck.HTTPLoader', function () {
    it('Should be able to load deck from URL', function (done) {
      const deck = new Deck.Deck(
        new Deck.HTTPLoader('https://deckbox.org/sets/1294166/export',
        Deck.DeckboxScraper));
      assert(deck);
      deck.ready().then(() => {
        assert(deck._mainDeck.length === 60);
        assert(deck._sideboard.length === 15);
        done();
      });
    });
  });
});

describe('Scryfall API', function () {
  describe('# Scryfall.getCard', function () {
    it('Should be able to find card information', function (done) {
      cardApi.getCard('Lightning Bolt').then((card) => {
        assert(card);
        done();
      });
    });
  });
});

/**/
describe('Game', function () {
  this.timeout(10000);

  describe('# Continuous priority passing', function () {
    it('Should make drawing player lose by drawing from empty library',
      (done) => {
        const game = new Game.Game(2, 0, true,
          [new Deck.Deck(new Deck.FSLoader('decklists/monored.txt')),
          new Deck.Deck(new Deck.FSLoader('decklists/kikichord.txt'))], cardApi
        );

        game.ready().then(() => {
          const p1 = game._players[1];

          try {
            // eslint-disable-next-line no-constant-condition
            while (true) {
              if (game.isWaitingForInput()) {
                game.passOrFinishChoice();
              } else {
                game.tick();
              }
            }
          } catch (e) {
            if (!(e instanceof Game.GameOver)) {
              throw e;
            }
          }

          assert(p1.hasLost());
          assert(p1._triedToDrawFromEmptyLibrary);
          done();
        });
      }
    );
  });

  describe('# Dealing damage to one player', function () {
    it('Should make that player lose by damage', function (done) {
      const game = new Game.Game(2, 0, true,
        [new Deck.Deck(new Deck.FSLoader('decklists/kikichord.txt')),
         new Deck.Deck(new Deck.FSLoader('decklists/kikichord.txt'))], cardApi);

      game.ready().then(() => {
        const p0 = game._players[0];

        try {
          // eslint-disable-next-line no-constant-condition
          while (true) {
            if (game.isWaitingForInput()) {
              game.passOrFinishChoice();
              p0.damage(3, 'debug', false);
            } else {
              game.tick();
            }
          }
        } catch (e) {
          if (!(e instanceof Game.GameOver)) {
            throw e;
          }
        }

        assert(p0.hasLost());
        assert(!p0._triedToDrawFromEmptyLibrary);
        assert(p0._life <= 0);
        done();
      });
    });
  });

  describe('# Dealing infect damage to one player', function () {
    it('Should make that player lose by poison counters', function (done) {
      const game = new Game.Game(2, 0, true,
        [new Deck.Deck(new Deck.FSLoader('decklists/kikichord.txt')),
         new Deck.Deck(new Deck.FSLoader('decklists/monored.txt'))], cardApi);

      game.ready().then(() => {
        const p0 = game._players[0];

        try {
          // eslint-disable-next-line no-constant-condition
          while (true) {
            if (game.isWaitingForInput()) {
              game.passOrFinishChoice();
              p0.damage(3, 'debug', true);
            } else {
              game.tick();
            }
          }
        } catch (e) {
          if (!(e instanceof Game.GameOver)) {
            throw e;
          }
        }

        assert(p0.hasLost());
        assert(!p0._triedToDrawFromEmptyLibrary);
        assert(p0._life >= 1);
        assert(p0._poisonCounters >= 10);
        done();
      });
    });
  });

  describe('# Dealing lethal damage to both players simultaneously', () => {
    it('Should draw the game', function (done) {
      const game = new Game.Game(2, 0, true,
        [new Deck.Deck(new Deck.FSLoader('decklists/kikichord.txt')),
         new Deck.Deck(new Deck.FSLoader('decklists/monored.txt'))], cardApi);

      game.ready().then(() => {
        const p0 = game._players[0];
        const p1 = game._players[1];

        try {
          // eslint-disable-next-line no-constant-condition
          while (true) {
            if (game.isWaitingForInput()) {
              game.passOrFinishChoice();
              p0.damage(3, 'debug', false);
              p1.damage(3, 'debug', false);
            } else {
              game.tick();
            }
          }
        } catch (e) {
          if (!(e instanceof Game.GameOver)) {
            throw e;
          }
        }

        assert(p0.hasLost());
        assert(p1.hasLost());
        assert(!p0._triedToDrawFromEmptyLibrary);
        assert(!p1._triedToDrawFromEmptyLibrary);
        assert(p0._life <= 0);
        assert(p1._life <= 0);
        assert(p0._poisonCounters === 0);
        assert(p1._poisonCounters === 0);
        done();
      });
    });
  });
});
