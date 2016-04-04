"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrandColiseumBase = require("../setONS/GrandColiseum.js");

class GrandColiseum extends GrandColiseumBase {
  constructor(game) {
    super(game, "Grand Coliseum", "Vintage Masters", "VMA");
  }
}

module.exports = GrandColiseum;
