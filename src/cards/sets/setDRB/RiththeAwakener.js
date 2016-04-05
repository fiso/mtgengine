"use strict";
const Constants = require ("../../../Constants");
const RiththeAwakenerBase = require("../setDDE/RiththeAwakener");

class RiththeAwakener extends RiththeAwakenerBase {
  constructor(game) {
    super(game, "Rith, the Awakener", "From the Vault: Dragons", "DRB");
  }
}

module.exports = RiththeAwakener;
