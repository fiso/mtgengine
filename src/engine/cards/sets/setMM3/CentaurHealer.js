"use strict";
const Constants = require ("../../../Constants");
const CentaurHealerBase = require("../setBBD/CentaurHealer");

class CentaurHealer extends CentaurHealerBase {
  constructor (game) {
    super(game, "Centaur Healer", "Modern Masters 2017", "MM3");
  }
}

module.exports = CentaurHealer;
