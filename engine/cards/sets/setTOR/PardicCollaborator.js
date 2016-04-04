"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PardicCollaborator extends Card {
  constructor(game) {
    super(game, "Pardic Collaborator", "Torment", "TOR");
  }
}

module.exports = PardicCollaborator;
