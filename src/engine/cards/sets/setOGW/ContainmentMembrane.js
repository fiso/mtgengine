"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContainmentMembrane extends UnimplementedCard {
  constructor (game) {
    super(game, "Containment Membrane", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ContainmentMembrane;
