"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HomaridExplorer extends UnimplementedCard {
  constructor (game) {
    super(game, "Homarid Explorer", "Dominaria", "DOM");
  }
}

module.exports = HomaridExplorer;
