"use strict";
const assert = require('assert');
const Constants = require("../engine/Constants");
const Inputs = require("../engine/Inputs");
const Permanent = require("../engine/objects/Permanent");
const BasicMountain = require("../engine/cards/BasicMountain");
const Game = require("../engine/Game");
const Cost = require("../engine/Cost");

describe('Game', function() {

  describe('# Continuous priority passing', function () {
    it('Should make drawing player lose by drawing from empty library', function () {
      let game = new Game.Game(2, 0, true);
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
      let game = new Game.Game(2, 0, true);
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
      let game = new Game.Game(2, 0, true);
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

  describe('# Dealing damage to both players simultaneously', function () {
    it('Should draw the game', function () {
      let game = new Game.Game(2, 0, true);
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

  let game = new Game.Game(2, 0, true);
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
    });
  });
});
