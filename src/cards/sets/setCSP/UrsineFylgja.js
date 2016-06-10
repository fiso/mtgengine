"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrsineFylgja extends UnimplementedCard {
  constructor (game) {
    super(game, "Ursine Fylgja", "Coldsnap", "CSP");
  }
}

module.exports = UrsineFylgja;
