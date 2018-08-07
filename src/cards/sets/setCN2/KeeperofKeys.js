"use strict";
const Constants = require ("../../../Constants");
const KeeperofKeysBase = require("../setPZ2/KeeperofKeys");

class KeeperofKeys extends KeeperofKeysBase {
  constructor (game) {
    super(game, "Keeper of Keys", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = KeeperofKeys;
