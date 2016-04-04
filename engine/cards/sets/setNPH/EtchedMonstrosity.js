"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EtchedMonstrosityBase = require("../setMM2/EtchedMonstrosity.js");

class EtchedMonstrosity extends EtchedMonstrosityBase {
  constructor(game) {
    super(game, "Etched Monstrosity", "New Phyrexia", "NPH");
  }
}

module.exports = EtchedMonstrosity;
