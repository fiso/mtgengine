"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncestorsProphet extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancestor's Prophet", "Onslaught", "ONS");
  }
}

module.exports = AncestorsProphet;
