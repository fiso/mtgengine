"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AuraGnarlidBase = require("../setPC2/AuraGnarlid.js");

class AuraGnarlid extends AuraGnarlidBase {
  constructor(game) {
    super(game, "Aura Gnarlid", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AuraGnarlid;
