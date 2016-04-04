"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RevivetheFallen extends UnimplementedCard {
  constructor(game) {
    super(game, "Revive the Fallen", "Morningtide", "MOR");
  }
}

module.exports = RevivetheFallen;
