"use strict";
const Constants = require ("../../../Constants");
const EtchedMonstrosityBase = require("../setMM2/EtchedMonstrosity");

class EtchedMonstrosity extends EtchedMonstrosityBase {
  constructor (game) {
    super(game, "Etched Monstrosity", "New Phyrexia", "NPH");
  }
}

module.exports = EtchedMonstrosity;
