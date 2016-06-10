"use strict";
const Constants = require ("../../../Constants");
const ImperiousPerfectBase = require("../setpCMP/ImperiousPerfect");

class ImperiousPerfect extends ImperiousPerfectBase {
  constructor (game) {
    super(game, "Imperious Perfect", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ImperiousPerfect;
