"use strict";
const Constants = require ("../../../Constants");
const CephalidColiseumBase = require("../setV12/CephalidColiseum");

class CephalidColiseum extends CephalidColiseumBase {
  constructor (game) {
    super(game, "Cephalid Coliseum", "World Championship Decks 2002", "WC02");
  }
}

module.exports = CephalidColiseum;
