"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalshanCollaborator extends Card {
  constructor(game) {
    super(game, "Balshan Collaborator", "Torment", "TOR");
  }
}

module.exports = BalshanCollaborator;
