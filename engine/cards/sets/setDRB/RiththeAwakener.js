"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RiththeAwakenerBase = require("../setDDE/RiththeAwakener.js");

class RiththeAwakener extends RiththeAwakenerBase {
  constructor(game) {
    super(game, "Rith, the Awakener", "From the Vault: Dragons", "DRB");
  }
}

module.exports = RiththeAwakener;
