"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FormoftheDragonBase = require("../setDRB/FormoftheDragon.js");

class FormoftheDragon extends FormoftheDragonBase {
  constructor(game) {
    super(game, "Form of the Dragon", "Ninth Edition", "9ED");
  }
}

module.exports = FormoftheDragon;
