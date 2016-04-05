"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntrepidProvisioner extends UnimplementedCard {
  constructor(game) {
    super(game, "Intrepid Provisioner", "Shadows over Innistrad", "SOI");
  }
}

module.exports = IntrepidProvisioner;
