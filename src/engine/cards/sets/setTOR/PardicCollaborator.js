"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PardicCollaborator extends UnimplementedCard {
  constructor (game) {
    super(game, "Pardic Collaborator", "Torment", "TOR");
  }
}

module.exports = PardicCollaborator;
