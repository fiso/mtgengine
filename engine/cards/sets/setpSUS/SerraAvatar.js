"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerraAvatarBase = require("../setC13/SerraAvatar.js");

class SerraAvatar extends SerraAvatarBase {
  constructor(game) {
    super(game, "Serra Avatar", "Super Series", "pSUS");
  }
}

module.exports = SerraAvatar;
