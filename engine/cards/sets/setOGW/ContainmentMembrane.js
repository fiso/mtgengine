"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ContainmentMembrane extends Card {
  constructor(game) {
    super(game, "Containment Membrane", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ContainmentMembrane;
