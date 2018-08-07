"use strict";
const Constants = require ("../../../Constants");
const IcatianStoreBase = require("../set5ED/IcatianStore");

class IcatianStore extends IcatianStoreBase {
  constructor (game) {
    super(game, "Icatian Store", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianStore;
