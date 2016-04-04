"use strict";
const Constants = require ("../../../Constants");
const CephalidColiseumBase = require("../setV12/CephalidColiseum");

class CephalidColiseum extends CephalidColiseumBase {
  constructor(game) {
    super(game, "Cephalid Coliseum", "Odyssey", "ODY");
  }
}

module.exports = CephalidColiseum;
