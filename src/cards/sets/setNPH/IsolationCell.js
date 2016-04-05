"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IsolationCell extends UnimplementedCard {
  constructor(game) {
    super(game, "Isolation Cell", "New Phyrexia", "NPH");
  }
}

module.exports = IsolationCell;
