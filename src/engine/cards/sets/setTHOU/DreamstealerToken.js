"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamstealerToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Dreamstealer Token", "Hour of Devastation Tokens", "THOU");
  }
}

module.exports = DreamstealerToken;
