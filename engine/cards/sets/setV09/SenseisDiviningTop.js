"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SenseisDiviningTopBase = require("../setCHK/SenseisDiviningTop.js");

class SenseisDiviningTop extends SenseisDiviningTopBase {
  constructor(game) {
    super(game, "Sensei's Divining Top", "From the Vault: Exiled", "V09");
  }
}

module.exports = SenseisDiviningTop;
