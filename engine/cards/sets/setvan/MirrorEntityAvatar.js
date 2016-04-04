"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorEntityAvatar extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirror Entity Avatar", "Vanguard", "VAN");
  }
}

module.exports = MirrorEntityAvatar;
