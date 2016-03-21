"use strict";
const assert = require('assert');
const Constants = require("../engine/Constants");
const Inputs = require("../engine/Inputs");
const Permanent = require("../engine/objects/Permanent");
const BasicMountain = require("../engine/cards/BasicMountain");
const Game = require("../engine/Game");

describe('Game', function() {
  let game = new Game.Game(2, 0, true);

  describe('# Continuous priority passing', function () {
    it('Should make drawing player lose by drawing from empty library', function () {
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
        if (e instanceof Game.GameOver) {
          assert(p1.hasLost());
          assert(p1._triedToDrawFromEmptyLibrary);
        } else {
          throw e;
        }
      }
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
