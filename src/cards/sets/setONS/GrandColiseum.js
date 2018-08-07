"use strict";
const Constants = require ("../../../Constants");
const GrandColiseumBase = require("../setC16/GrandColiseum");

class GrandColiseum extends GrandColiseumBase {
  constructor (game) {
    super(game, "Grand Coliseum", "Onslaught", "ONS");
  }
}

module.exports = GrandColiseum;
