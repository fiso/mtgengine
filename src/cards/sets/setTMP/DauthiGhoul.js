"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauthiGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Dauthi Ghoul", "Tempest", "TMP");
  }
}

module.exports = DauthiGhoul;
