"use strict";
const assert = require('assert');
const Constants = require("../engine/Constants");
const Inputs = require("../engine/Inputs");
const Permanent = require("../engine/objects/Permanent");
const BasicMountain = require("../engine/cards/BasicMountain");
const Game = require("../engine/Game");
const Cost = require("../engine/Cost");
const Deck = require("../engine/Deck");

describe('Game', function() {
  describe('# Continuous priority passing', function () {
    it('Should make drawing player lose by drawing from empty library', function () {
      let game = new Game.Game(2, 0, true,
        [new Deck.Deck(new Deck.FSLoader("decklists/monored.txt")),
         new Deck.Deck(new Deck.FSLoader("decklists/monored.txt"))]
       );
      let p0 = game._players[0];
      let p1 = game._players[1];

      try {
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
    });
  });

  describe('# Dealing damage to one player', function () {
    it('Should make that player lose by damage', function () {
      let game = new Game.Game(2, 0, true,
        [new Deck.Deck(new Deck.FSLoader("decklists/monored.txt")),
         new Deck.Deck(new Deck.FSLoader("decklists/monored.txt"))]
       );
      let p0 = game._players[0];
      let p1 = game._players[1];

      try {
        while (true) {
          if (game.isWaitingForInput()) {
            game.passOrFinishChoice();
            p0.damage(3, "debug", false);
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
    });
  });

  describe('# Dealing infect damage to one player', function () {
    it('Should make that player lose by poison counters', function () {
      let game = new Game.Game(2, 0, true,
        [new Deck.Deck(new Deck.FSLoader("decklists/monored.txt")),
         new Deck.Deck(new Deck.FSLoader("decklists/monored.txt"))]
       );
      let p0 = game._players[0];
      let p1 = game._players[1];

      try {
        while (true) {
          if (game.isWaitingForInput()) {
            game.passOrFinishChoice();
            p0.damage(3, "debug", true);
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
    });
  });

  describe('# Dealing lethal damage to both players simultaneously', function () {
    it('Should draw the game', function () {
      let game = new Game.Game(2, 0, true,
        [new Deck.Deck(new Deck.FSLoader("decklists/monored.txt")),
         new Deck.Deck(new Deck.FSLoader("decklists/monored.txt"))]
       );
      let p0 = game._players[0];
      let p1 = game._players[1];

      try {
        while (true) {
          if (game.isWaitingForInput()) {
            game.passOrFinishChoice();
            p0.damage(3, "debug", false);
            p1.damage(3, "debug", false);
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
    });
  });
});

describe('Permanent', function() {
  let game = new Game.Game(2, 0, true,
    [new Deck.Deck(new Deck.FSLoader("decklists/monored.txt")),
     new Deck.Deck(new Deck.FSLoader("decklists/monored.txt"))]
   );
  let card = new BasicMountain(game);
  let permanent = new Permanent(game, game._players[0], game._players[0], card);

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

describe('Cost', function() {
  describe('# cmc()', function () {
    it('Should understand cmc of costs', function () {
      assert(new Cost("{2}{B}{B}").cmc === 4);
      assert(new Cost("{4}").cmc === 4);
      assert(new Cost("{X}").cmc === 0);
      assert(new Cost("{X}{X}").cmc === 0);
      assert(new Cost("{UB}{UB}").cmc === 2);
      assert(new Cost("{W2}{W2}{W2}").cmc === 6);
      assert(new Cost("{2}{C}").cmc === 3);
      assert(new Cost("{C}{C}").cmc === 2);
      assert(new Cost("{C}{C}").cmc === new Cost("{C}{C}{T}{Q}").cmc);
      let allSymbols = "{C}{W}{U}{B}{R}{G}{W2}{U2}{B2}{R2}{G2}{P}{WP}{UP}{BP}{RP}{GP}{X}{Y}{Z}{S}{BG}{BR}{GU}{GW}{RG}{RW}{UB}{UR}{WB}{WU}";
      assert(new Cost(allSymbols).cmc === 33);
      assert(new Cost(allSymbols + "{15}").cmc === 48);
      assert(new Cost("{1500}").cmc === 1500);
    });
  });

  describe('# getCmcOnStack()', function () {
    it('Should understand cmc of costs', function () {
      assert(new Cost("{2}{B}{B}").getCmcOnStack(1, 2, 3) === 4);
      assert(new Cost("{X}").getCmcOnStack(1, 2, 3) === 1);
      assert(new Cost("{X}{X}").getCmcOnStack(3, 2, 1) === 6);
      assert(new Cost("{X}{Y}{Z}").getCmcOnStack(1, 2, 3) === 6);
      assert(new Cost("{2}{W}{X}{X}").getCmcOnStack(2) === 7);
    });
  });
});

describe('Deck', function() {
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
      let loader = new Deck.FSLoader("decklists/monored.txt");
      assert(loader);
    });

    it('Should not be able to instantiate with invalid file', function () {
      let loader = null;
      try {
        loader = new Deck.FSLoader("nonexistant.file");
      } catch (e) {

      }
      assert(!loader);
    });

    it('Should get 60 + 15 cards in provided test deck', function () {
      let loader = new Deck.FSLoader("decklists/monored.txt");
      assert(loader.mainDeck.length === 60);
      assert(loader.sideboard.length === 15);
    });

  });

  describe('# Deck.constructor()', function () {
    it('Should not be able to instantiate without providing a loader', function () {
      let deck = null;
      try {
        deck = new Deck.Deck();
      } catch (e) {

      }
      assert(!deck);
    });
  });

  describe('# Deck.HTTPLoader', function () {
    it('Should be able to instantiate when provided with a loader', function () {
      assert(new Deck.Deck(new Deck.FSLoader("decklists/monored.txt")));
    });
  });

  describe('# Deck.HTTPLoader', function () {
    it('Should be able to load deck from URL', function (done) {
      let loader = new Deck.HTTPLoader(
        "http://deckbox.org/sets/1294166/export",
        null,
        Deck.DeckboxScraper);

      loader.onLoaded(function () {
          assert(loader.mainDeck);
          assert(loader.mainDeck.length === 60);
          assert(loader.sideboard);
          assert(loader.sideboard.length === 15);
          let deck = new Deck.Deck(loader);
          done();
        });
    });
  });
});
