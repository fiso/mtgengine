"use strict";
const Constants = require ("../../../Constants");
const RiththeAwakenerBase = require("../setDDE/RiththeAwakener");

class RiththeAwakener extends RiththeAwakenerBase {
  constructor (game) {
    super(game, "Rith, the Awakener", "Invasion", "INV");
  }
}

module.exports = RiththeAwakener;
