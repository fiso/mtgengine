"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RitesofFlourishingBase = require("../setFUT/RitesofFlourishing.js");

class RitesofFlourishing extends RitesofFlourishingBase {
  constructor(game) {
    super(game, "Rites of Flourishing", "Magic 2012", "M12");
  }
}

module.exports = RitesofFlourishing;
