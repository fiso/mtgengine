"use strict";
const Constants = require ("../../../Constants");
const TeferiMageofZhalfirBase = require("../setIMA/TeferiMageofZhalfir");

class TeferiMageofZhalfir extends TeferiMageofZhalfirBase {
  constructor (game) {
    super(game, "Teferi, Mage of Zhalfir", "From the Vault: Legends", "V11");
  }
}

module.exports = TeferiMageofZhalfir;
