"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IchigaWhoTopplesOaksBase = require("../setBOK/IchigaWhoTopplesOaks.js");

class IchigaWhoTopplesOaks extends IchigaWhoTopplesOaksBase {
  constructor(game) {
    super(game, "Ichiga, Who Topples Oaks", "Release Events", "pREL");
  }
}

module.exports = IchigaWhoTopplesOaks;
