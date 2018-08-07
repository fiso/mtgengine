"use strict";
const Constants = require ("../../../Constants");
const ValdukKeeperoftheFlameBase = require("../setDOM/ValdukKeeperoftheFlame");

class ValdukKeeperoftheFlame extends ValdukKeeperoftheFlameBase {
  constructor (game) {
    super(game, "Valduk, Keeper of the Flame", "Dominaria Promos", "PDOM");
  }
}

module.exports = ValdukKeeperoftheFlame;
