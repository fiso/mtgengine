"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercurialPretender extends UnimplementedCard {
  constructor (game) {
    super(game, "Mercurial Pretender", "Magic 2015 Core Set", "M15");
  }
}

module.exports = MercurialPretender;
