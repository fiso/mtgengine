"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindshrieker extends UnimplementedCard {
  constructor(game) {
    super(game, "Mindshrieker", "Innistrad", "ISD");
  }
}

module.exports = Mindshrieker;
