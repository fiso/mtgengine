"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalshanCollaborator extends UnimplementedCard {
  constructor (game) {
    super(game, "Balshan Collaborator", "Torment", "TOR");
  }
}

module.exports = BalshanCollaborator;
