"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KjeldoranSkycaptainBase = require("../set5ED/KjeldoranSkycaptain.js");

class KjeldoranSkycaptain extends KjeldoranSkycaptainBase {
  constructor(game) {
    super(game, "Kjeldoran Skycaptain", "Masters Edition II", "ME2");
  }
}

module.exports = KjeldoranSkycaptain;
