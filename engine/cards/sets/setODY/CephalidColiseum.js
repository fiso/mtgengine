"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CephalidColiseumBase = require("../setV12/CephalidColiseum.js");

class CephalidColiseum extends CephalidColiseumBase {
  constructor(game) {
    super(game, "Cephalid Coliseum", "Odyssey", "ODY");
  }
}

module.exports = CephalidColiseum;
