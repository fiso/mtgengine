"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntrepidProvisioner extends Card {
  constructor(game) {
    super(game, "Intrepid Provisioner", "Shadows over Innistrad", "SOI");
  }
}

module.exports = IntrepidProvisioner;
