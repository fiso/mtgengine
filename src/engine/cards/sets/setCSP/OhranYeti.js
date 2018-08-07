"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OhranYeti extends UnimplementedCard {
  constructor (game) {
    super(game, "Ohran Yeti", "Coldsnap", "CSP");
  }
}

module.exports = OhranYeti;
