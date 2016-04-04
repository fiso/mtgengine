"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrorEntityAvatar extends Card {
  constructor(game) {
    super(game, "Mirror Entity Avatar", "Vanguard", "VAN");
  }
}

module.exports = MirrorEntityAvatar;
