"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AkromasMemorialBase = require("../setFUT/AkromasMemorial.js");

class AkromasMemorial extends AkromasMemorialBase {
  constructor(game) {
    super(game, "Akroma's Memorial", "Magic 2013", "M13");
  }
}

module.exports = AkromasMemorial;
