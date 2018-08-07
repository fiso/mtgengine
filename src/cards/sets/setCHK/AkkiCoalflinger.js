"use strict";
const Constants = require ("../../../Constants");
const AkkiCoalflingerBase = require("../setEVG/AkkiCoalflinger");

class AkkiCoalflinger extends AkkiCoalflingerBase {
  constructor (game) {
    super(game, "Akki Coalflinger", "Champions of Kamigawa", "CHK");
  }
}

module.exports = AkkiCoalflinger;
