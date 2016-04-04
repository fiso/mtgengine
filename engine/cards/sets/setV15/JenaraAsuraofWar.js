"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JenaraAsuraofWarBase = require("../setARB/JenaraAsuraofWar.js");

class JenaraAsuraofWar extends JenaraAsuraofWarBase {
  constructor(game) {
    super(game, "Jenara, Asura of War", "From the Vault: Angels", "V15");
  }
}

module.exports = JenaraAsuraofWar;
