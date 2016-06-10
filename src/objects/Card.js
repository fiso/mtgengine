"use strict";
const _ = require("underscore");
const MTGObject = require("./MTGObject");
const Constants = require("../Constants");
const assert = require("assert");
const Cost = require("../Cost");

class Card extends MTGObject {
  constructor (game, cardName, setName, setCode) {
    super(game);
    if (new.target === Card) {
      throw new TypeError("Card is not to be used directly");
    }
    this._name = cardName;
    this._superTypes = [];
    this._types = [];
    this._subTypes = [];
    this._abilities = [];
    this._imageUrl = "";
    this._setName = setName;
    this._setCode = setCode;
    this._cost = undefined;

    this._promise = new Promise((resolve, reject) => {
      this._game._cardApi.getCard(cardName, setName, setCode).then((card) => {
        assert(card.name === cardName);
        this._imageUrl = card.editions[0].image_url;
        this._mapTypes(card);
        resolve(this);
      });
    });
  }

  _mapTypes (card) {
    if (card.supertypes) {
      this._superTypes = _.map(card.supertypes, function (superType) {
        return Constants.cardSuperTypes[superType.toUpperCase()] ?
               Constants.cardSuperTypes[superType.toUpperCase()] :
               superType.toUpperCase();
      });
    }
    if (card.types) {
      this._types = _.map(card.types, function (type) {
        return Constants.cardTypes[type.toUpperCase()] ?
               Constants.cardTypes[type.toUpperCase()] :
               type.toUpperCase();
      });
    }
    if (card.subtypes) {
      this._subTypes = _.map(card.subtypes, function (subtype) {
        return subtype.toUpperCase();
      });
    }
  }

  ready () {
    return this._promise;
  }

  sharesAnyTypesWith (otherCard) {
    for (let type of this._superTypes) {
      if (otherCard._superTypes.indexOf(type) !== -1) {
        return true;
      }
    }
    for (let type of this._types) {
      if (otherCard._types.indexOf(type) !== -1) {
        return true;
      }
    }
    for (let type of this._subTypes) {
      if (otherCard._subTypes.indexOf(type) !== -1) {
        return true;
      }
    }
    return false;
  }

  isBasicLand () {
    if (this._superTypes.indexOf(Constants.cardSuperTypes.BASIC) === -1) {
      return false;
    }
    if (this._types.indexOf(Constants.cardTypes.LAND) === -1) {
      return false;
    }
    return true;
  }

  hasType (type) {
    if (this._superTypes.indexOf(type) !== -1) {
      return true;
    }
    if (this._types.indexOf(type) !== -1) {
      return true;
    }
    if (this._subTypes.indexOf(type) !== -1) {
      return true;
    }
    return false;
  }

  resolve (controller, targets) {
    this._game.log("Card resolves");
  }

  get cost () {
    return this._cost;
  }

  set cost (costString) {
    this._cost = new Cost(costString);
  }

  placeInZone (zone) {
    this._zone = zone;
  }

  getCurrentZone () {
    return this._zone;
  }

  addAbility (cost, abilityCallback, isManaAbility) {
    this._abilities.push({
      cost: cost,
      abilityCallback: abilityCallback,
      isManaAbility: isManaAbility
    });
  }
}

module.exports = Card;
