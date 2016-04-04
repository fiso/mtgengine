"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KjeldoranOutpostBase = require("../setALL/KjeldoranOutpost.js");

class KjeldoranOutpost extends KjeldoranOutpostBase {
  constructor(game) {
    super(game, "Kjeldoran Outpost", "Masters Edition II", "ME2");
  }
}

module.exports = KjeldoranOutpost;
