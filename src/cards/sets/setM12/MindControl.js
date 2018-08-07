"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindControl extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Control", "Magic 2012", "M12");
  }
}

module.exports = MindControl;
