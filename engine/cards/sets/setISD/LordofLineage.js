"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordofLineage extends UnimplementedCard {
  constructor(game) {
    super(game, "Lord of Lineage", "Innistrad", "ISD");
  }
}

module.exports = LordofLineage;
