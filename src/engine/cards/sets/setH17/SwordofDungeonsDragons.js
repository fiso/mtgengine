"use strict";
const Constants = require ("../../../Constants");
const SwordofDungeonsDragonsBase = require("../setUST/SwordofDungeonsDragons");

class SwordofDungeonsDragons extends SwordofDungeonsDragonsBase {
  constructor (game) {
    super(game, "Sword of Dungeons & Dragons", "HasCon 2017", "H17");
  }
}

module.exports = SwordofDungeonsDragons;
